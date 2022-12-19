import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

function AuthorSide({ authors }) {
  return (
    <Grid container alignItems="center" direction="column" rowSpacing={1}>
      {authors.map((author) => (
        <Grid item key={author.id}>
          <Grid
            container
            sx={{
              // width: "180px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Grid item>
              {/* <Link href={`/${author.slug}`}> */}

              <Image
                src={author.avatar.url}
                alt={author.avatar.filename}
                width={45}
                height={45}
                style={{ borderRadius: "50%" }}
              />
              {/* </Link> */}
            </Grid>
            <Grid item sx={{ maxWidth: "100px", marginRight: 1 }}>
              {/* <Link href={`/${author.slug}`}> */}
              <h4
                style={{
                  margin: "1px 0 0 0 ",
                  textOverflow: "ellipsis",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                {author.name}
              </h4>
              {/* </Link> */}
              <span>{author.field}</span>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default AuthorSide;
