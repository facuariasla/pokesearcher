import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Stack,
  Progress,
} from "@chakra-ui/react";
import Image from "next/image";

const PokeModal = ({ pokedata, index }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pokemon, setPokemon] = useState<any | null>(null);

  const handleData = async () => {
    onOpen();
    const res = await fetch(pokedata.url);
    const data = await res.json();
    console.log(data);
    setPokemon(data);
  };

  return (
    <>
      <Text
        onClick={handleData}
        cursor="pointer"
        fontWeight={500}
        transition="all .3s"
        _hover={{ color: "green" }}
      >
        Description
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {pokedata.name.charAt(0).toUpperCase() + pokedata.name.slice(1)}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction="row" spacing={2} align="center" justify="center">
              <Text fontWeight={500} fontSize="18px">
                Type:{" "}
              </Text>
              {pokemon?.types.map((el: any, index: any) => (
                <Text
                  key={index}
                  fontWeight={500}
                  color={el.type.name}
                  fontSize="18px"
                >
                  {el.type.name.charAt(0).toUpperCase() + el.type.name.slice(1)}
                </Text>
              ))}
            </Stack>

            <Stack direction="row" justify="space-between" p="1rem 0">
              <Stack w="50%">
                <Image
                  unoptimized
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokedata.url.split("/")[6]
                  }.png`}
                  // src={poke.url.split('/')[7]}
                  width={100}
                  height={100}
                  alt={pokedata.name}
                  objectFit="contain"
                />
                <Stack direction="column">
                  <Text as="u" textAlign="center" fontWeight={600}>
                    Skills
                  </Text>
                  {pokemon?.abilities.map((el: any, index: any) => (
                    <Text as="i" textAlign="center" key={index}>
                      {el.ability.name.charAt(0).toUpperCase() +
                        el.ability.name.slice(1)}
                    </Text>
                  ))}
                </Stack>
              </Stack>
              <Stack w="50%">
                {pokemon?.stats.map((el: any, index: any) => (
                  <Stack key={index}>
                    <Stack>
                      <Stack direction="row" spacing={1}>
                        <Text>
                          {el.stat.name.charAt(0).toUpperCase() +
                            el.stat.name.slice(1)}
                        </Text>
                        <Text fontWeight={600}>({el.base_stat})</Text>
                      </Stack>
                      <Progress
                        colorScheme="green"
                        size="sm"
                        value={el.base_stat}
                      />
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PokeModal;
