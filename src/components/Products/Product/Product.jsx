import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Grow,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const checked = true;
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Grow
      in={checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(checked ? { timeout: 1500 } : {})}
    >
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image.url}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {product.price.formatted}&nbsp;€
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label="Add to Cart"
            className={classes.iconButton}
            onClick={handleAddToCart}
          >
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    </Grow>
  );
};

export default Product;
