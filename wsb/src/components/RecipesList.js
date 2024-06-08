import { Grid } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  height: 100%;
`;

export const RecipesList = ({ recipes }) => {
  return (
    <Grid container spacing={4} padding={4}>
      {recipes.map((recipe, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <StyledCard>
            <CardMedia
              sx={{ height: 240 }}
              image={recipe.recipe.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              {recipe.recipe.ingredientLines.map((ingredientLine) => (
                <Typography gutterBottom variant="body" component="div">
                  {ingredientLine}
                </Typography>
              ))}
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};
