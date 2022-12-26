import { Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AuthorSide({ authors }) {
  return (
    <Grid container alignItems="flex-start" direction="column" rowSpacing={1}>
      {authors.map((author, index) => (
        <>
          <Grid item key={author.id}>
            <Grid
              container
              sx={{
                marginBottom: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Grid item sx={{ display: "flex", alignItems: "center" }}>
                <Link href={`authors/${author.slug}`}>
                  <Image
                    src={author.avatar.url}
                    alt={author.avatar.filename}
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%", cursor: "pointer" }}
                  />
                </Link>
              </Grid>
              <Grid
                item
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "100px",
                  marginRight: 1,
                }}
              >
                <Link href={`authors/${author.slug}`}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginY: 0,
                      padding: 0,
                      width: "100px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "inline-block",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        overflow: "visible",
                      },
                      cursor: "pointer",
                    }}
                  >
                    {author.name}
                  </Typography>
                </Link>
                <span>{author.field}</span>
              </Grid>
            </Grid>
            {index < authors.length - 1 ? <Divider /> : ""}
          </Grid>
        </>
      ))}
    </Grid>
  );
}

export default AuthorSide;
