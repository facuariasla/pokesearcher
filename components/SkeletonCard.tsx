import {
  Skeleton,
  Stack,
} from "@chakra-ui/react";

const SkeletonCard=() => {
  return (
    <Stack>
      <Skeleton height="10px" w="40px" />
      <Skeleton height="15px" />
      <Skeleton height="10px" w="50px" />
      <Skeleton height="15px" />
      <Skeleton height="10px" w="50px" />
      <Skeleton height="15px" />
      <Skeleton height="10px" w="70px" />
      <Skeleton height="15px" />
      <Skeleton height="10px" w="100px" />
      <Skeleton height="15px" />
      <Skeleton height="10px" w="100px" />
      <Skeleton height="15px" />
    </Stack>
  );
}

export default SkeletonCard;