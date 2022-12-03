import React, { useState } from "react";
import { Box, Grid, Button, ButtonGroup, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import style from "../../style/buyticket.scss";
import { useRecoilState } from "recoil";
import authState from "../../state/auth";
import createTicket from "../../lib/createTicket";
import Loading from "../Loading";

const BuyTicket = ({ dA, dB, dC, cost }) => {
  const [auth, setAuth] = useRecoilState(authState);

  console.log(dA);

  const handleClick = (c) => () => {
    createTicket(auth.email, c);
    console.log(`식권 ${c}가 발급되었습니다.`);
  };

  if (!dA || !dA.length || !cost) return <Loading />;

  return (
    <div style={{ margin: 0 }}>
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 4, ml: 2, mr: 4 }}
      >
        <Grid container spacing={0}>
          <Grid item xs={8} sx={{ padding: "0", margin: "0" }}>
            <Button
              className="courseBtn"
              sx={{ padding: "0", color: "#49663c", fontWeight: "bolder" }}
            >
              A
              <br />
              {dA.map((d, index) => (
                <React.Fragment key={index}>
                  {d.replace("&amp;", "&")}
                  <br />
                </React.Fragment>
              ))}
              <br />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <ButtonGroup orientation="vertical">
                  <Link to="/UnUsed">
                    <Button className="details" variant="contained">
                      잔여식권
                      <br /> 1개
                    </Button>
                  </Link>
                  <Button
                    className="details"
                    variant="contained"
                    onClick={handleClick("A")}
                  >
                    {cost.A}원
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 2, ml: 2, mr: 4 }}
      >
        <Grid container spacing={0}>
          <Grid item xs={8} sx={{ padding: "0", margin: "0" }}>
            <Button
              className="courseBtn"
              sx={{ padding: "0", color: "#49663c", fontWeight: "bolder" }}
            >
              B
              <br />
              {dB.map((d, index) => (
                <React.Fragment key={index}>
                  {d.replace("&amp;", "&")}
                  <br />
                </React.Fragment>
              ))}
              <br />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <ButtonGroup orientation="vertical">
                  <Link to="/BuyList/UnUsed">
                    <Button className="details" variant="contained">
                      잔여식권
                      <br /> 0개
                    </Button>
                  </Link>
                  <Button
                    className="details"
                    variant="contained"
                    onClick={handleClick("B")}
                  >
                    4000원
                    {/* {cost.B}원 */}
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        sx={{ display: "flex", alignItems: "flex-end", mt: 2, ml: 2, mr: 4 }}
      >
        <Grid container spacing={0}>
          <Grid item xs={8} sx={{ padding: "0", margin: "0" }}>
            <Button
              className="courseBtn"
              sx={{ padding: "0", color: "#49663c", fontWeight: "bolder" }}
            >
              C
              <br />
              {dC.map((d, index) => (
                <React.Fragment key={index}>
                  {d.replace("&amp;", "&")}
                  <br />
                </React.Fragment>
              ))}
              <br />
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <ButtonGroup orientation="vertical">
                  <Link to="/BuyList/UnUsed">
                    <Button className="details" variant="contained">
                      잔여식권
                      <br /> 0개
                    </Button>
                  </Link>
                  <Button
                    className="details"
                    variant="contained"
                    onClick={handleClick("C")}
                  >
                    3500원
                    {/* {cost.C}원 */}
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BuyTicket;
