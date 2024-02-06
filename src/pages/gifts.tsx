import { Box, Container } from "@mui/material";
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
];

export default function Gifts() {
  return (
    <Container className="flex h-full flex-col w-full max-w-full bg-secondary-1 p-l md:p-xl">
      <Box className="p-0 m-0 grid grid-cols-1 md:grid-cols-4 md:gap-x-6 md:gap-y-8">
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
    </Container>
  );
}
