import Image from "next/image";
import Link from "next/link";

import { ScrollbarY } from "styled-scrollbar";

//MUI
import { Divider, Grid, Tooltip, Typography } from "@mui/material";

function AuthorSide({ authors }) {
  // console.log()
  return (
    <div
      style={{
        position: "fixed",
        maxHeight: "calc(100vh - 180px)",
      }}
    >
      <Grid item>
        <Link href="authors">
          <Typography
            variant="h6"
            sx={{ cursor: "pointer", marginRight: 2, marginY: 1, padding: 0 }}
          >
            نویسندگان:
          </Typography>
        </Link>
      </Grid>
      <ScrollbarY r={3}>
        <Grid display="flex" flexDirection="column" alignItems="flex-start">
          <Grid
            container
            maxHeight={300}
            overflow="scroll"
            alignItems="flex-start"
            direction="column"
            flexWrap="nowrap"
            rowGap={1}
          >
            {authors.map((author, index) => (
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
                      <Tooltip title={author.name} placement="bottom-end">
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
                            cursor: "pointer",
                          }}
                        >
                          {author.name}
                        </Typography>
                      </Tooltip>
                    </Link>
                    <span>{author.field}</span>
                  </Grid>
                </Grid>
                {index < authors.length - 1 ? <Divider /> : ""}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </ScrollbarY>
    </div>
  );
}

export default AuthorSide;
