import shopify from "../services/shopify.js";
export const getAllProducts = async (req, res) => {
  try {
    // console.log(res.locals.shopify.session.shop, "test")
    // Fetch products using the Shopify API
    const products = await shopify.api.rest.Product.all({
      session: res.locals.shopify.session,
    });

    // Send the list of products as a JSON response
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
}

export const getProductsCount = async (req, res) => {
  try {
    const countData = await shopify.api.rest.Product.count({
      session: res.locals.shopify.session,
    });
    res.status(200).send(countData);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
};

export const createProduct = async (req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
};