import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Card from "../components/Card";

const giftList = [
  {
    guestId: "2387489",
    link_amazon: "#",
    link_walmart: "#",
    image_link:
      "https://m.media-amazon.com/images/I/51jyLFR7V9L._AC_SL1500_.jpg",
    name: "Aspiradora",
  },
  {
    guestId: "",
    link_amazon: "#",
    link_walmart: "#",
    image_link:
      "https://m.media-amazon.com/images/I/71P2piWQ3ML._AC_SL1500_.jpg",
    name: "Waflera",
  },
];

export default function Gifts() {
  return (
    <Container className="flex h-full flex-col w-full max-w-full bg-secondary-1 p-l md:p-xl">
      <Box className="p-0 mt-3 mb-3 grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-8">
        {giftList.map((gift) => {
          return (
            <Card
              key={`${gift.name}-card`}
              src={gift.image_link}
              logo={gift.link_amazon ? "amazon" : "walmart"}
              link={gift.link_amazon ? gift.link_amazon : gift.link_walmart}
              name={gift.name}
              reserved={gift.guestId}
            />
          );
        })}
      </Box>

      <Typography
        sx={{ mt: 4, mb: 2 }}
        variant="h6"
        component="div"
        className="text-black"
      >
        Recuerda
      </Typography>
      <List className="text-black">
        <ListItem>
          <ListItemText primary="Si Apartas un regalo no significa que la compra se ha realizado." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Para realizar la compra debes entrar al enlace de la tienda que ubicarás en la parte superior de cada artículo." />
        </ListItem>
        <ListItem>
          <ListItemText primary="La compra se realizar desde el sitio del vendedor o distribuidor, esta página sólo funciona como una galería de posibles regalos." />
        </ListItem>
      </List>
    </Container>
  );
}
