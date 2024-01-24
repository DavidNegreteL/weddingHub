import { Inter } from "next/font/google";
import { Container } from "@mui/material";
import ResponsiveNav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container className="flex h-full flex-col p-xl w-full max-w-full bg-secondary-1">
      <ResponsiveNav />
      <Hero />
    </Container>
  );
}
