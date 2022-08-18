import {
  Button,
  Container,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import PokeModal from "../components/PokeModal";
import { loadPokemons } from "../lib";

const Home: NextPage = ({ allPokeWImg }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [arrayHundred, setArrayHundred] = useState(allPokeWImg);
  const [arrayFragment, setArrayFragment] = useState<any>();
  const [word, setWord] = useState(false);

  const handleSearch = (e: any) => {
    if (e.target.value.length > 0) {
      const array = arrayFragment?.filter((el: any) =>
        el.name.includes(e.target.value.toLowerCase())
      );
      setArrayFragment(array);
      setWord(true);
    } else {
      setWord(false);
    }
  };

  useEffect(() => {
    const query = async() => {
      const res = await loadPokemons(800);
      const allPokemons = await res.results;
      const allPokeWImg = await allPokemons.map((el: any) => {
        return {
          ...el,
          imageurl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            el.url.split("/")[6]
          }.png`
        }
      });
      setArrayFragment(allPokeWImg)
    }
    query()
  }, [])
  
  return (
    <div>
      <Head>
        <title>Pokemon Searcher | Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/star-poke.ico" />
        <meta name="theme-color" content="#50B960" />
      </Head>

      <Container maxW="1280px">
        <Stack spacing={4}>
          <Stack alignSelf="flex-end" p={4}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? "Dark 🌑" : "Light ☀"} Mode
            </Button>
          </Stack>
          <Heading textAlign="center">PokeSearcher!</Heading>

          <Stack width="100%" p="0 2rem">
            <Input
              w="100%"
              type="text"
              placeholder="Search"
              onChange={(e) => handleSearch(e)}
            />
          </Stack>

          {/* Cards container */}
          <Stack py={4}>
            <SimpleGrid minChildWidth="140px" spacing="20px">
              {word
                ? arrayFragment?.map((poke: any, index: any) => (
                    <Stack
                      key={index}
                      border="1px solid black"
                      boxShadow="dark-lg"
                      rounded="md"
                      p={2}
                    >
                      <Text>{poke.url.split("/")[6]}</Text>
                      <Text
                        textAlign="center"
                        p={0}
                        m={0}
                        fontWeight={500}
                        fontSize="20px"
                      >
                        {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                      </Text>
                      <Stack align="center">
                        <Stack w={100}>
                          <Image
                            unoptimized
                            src={poke.imageurl}
                            // src={poke.url.split('/')[7]}
                            width={100}
                            height={100}
                            alt={poke.name}
                            objectFit="contain"
                          />
                        </Stack>
                        <Stack></Stack>
                        <Stack>
                          <PokeModal pokedata={poke} index={index} />
                        </Stack>
                      </Stack>
                    </Stack>
                  ))
                : arrayHundred?.map((poke: any, index: any) => (
                    <Stack
                      key={index}
                      border="1px solid black"
                      boxShadow="dark-lg"
                      rounded="md"
                      p={2}
                    >
                      <Text>{index + 1}</Text>
                      <Text
                        textAlign="center"
                        p={0}
                        m={0}
                        fontWeight={500}
                        fontSize="20px"
                      >
                        {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                      </Text>
                      <Stack align="center">
                        <Stack w={100}>
                          <Image
                            unoptimized
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                              poke.url.split("/")[6]
                            }.png`}
                            width={100}
                            height={100}
                            alt={poke.name}
                            objectFit="contain"
                          />
                        </Stack>
                        <Stack></Stack>
                        <Stack>
                          <PokeModal pokedata={poke} index={index} />
                        </Stack>
                      </Stack>
                    </Stack>
                  ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await loadPokemons(100);
  const allPokemons = await res.results;
  const allPokeWImg = await allPokemons.map((el: any) => {
    return {
      ...el,
      imageurl:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        el.url.split("/")[6]
      }.png`
    }
  });
  return {
    props: {
      allPokeWImg,
    },
  };
};

export default Home;
