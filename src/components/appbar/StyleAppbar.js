import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

export const StyledAppBar = styled(AppBar)`
  background: linear-gradient(50deg, #7ddbee, #ee836b);
`;
export const StyledListBox = styled(Box)`
  display: none;

  @media (min-width: 600px) {
    display: block;
  }

  .list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

export const StyledTypography = styled(Typography)`
  color: #000;
  font-size: x-large;
`;

export const StyledButton = styled(Button)`
  && {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    margin-left: 10px;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #7ddbee;
      transform: scaleX(0);
      transition: transform 0.5s;
    }

    &::before {
      top: -3px;
      transform-origin: left;
    }

    &::after {
      bottom: -3px;
      transform-origin: right;
    }

    &:hover::before,
    &:hover::after,
    .active::before,
    .active::after {
      transform: scaleX(1);
    }

    &:hover {
      color: #7ddbee;
    }
  }
`;

export const StyledMenuicon = styled(MenuIcon)`
  color: #ee836b;
`;

export const StyledDrawer = styled(Drawer)`
  display: block;
  @media (min-width: 600px) {
    display: none;
  }

  .MuiDrawer-paper {
    box-sizing: border-box;
    width: ${(props) => props.drawerWidth};
    background: linear-gradient(80deg, #7ddbee, #ee836b);
    color: #5498a4;
  }
`;
