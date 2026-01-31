import { Card, Text, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  issuer: string;
  date: string;
}

const CertificationCard = ({ title, issuer, date }: Props) => {
  return (
    <Card
      p={6}
      variant="outline"
      transition="all 0.3s ease-in-out"
      _hover={{ transform: "translateY(-4px)" }}
    >
      <VStack align="start" spacing={2}>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {issuer}
        </Text>
        <Text fontSize="sm">{date}</Text>
      </VStack>
    </Card>
  );
};

export default CertificationCard;