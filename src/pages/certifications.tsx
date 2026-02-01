import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Certification from "../components/Certification";
import {
  Box,
  VStack,
  Text,
  SimpleGrid,
  Image,
  Grid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { certifications, CertificationLevel } from "../data/certifications";

import fundamentalsLogo from "../images/ms-fundamentals.svg";
import associateLogo from "../images/ms-associate.svg";

const Certifications = () => {
  const renderCerts = (level: CertificationLevel) => (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
      {certifications
        .filter((cert) => cert.level === level)
        .map((cert) => (
          <Certification key={cert.title} {...cert} />
        ))}
    </SimpleGrid>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="App">
        <Header title="Certifications" />
      </div>

      <div style={{ overflow: "hidden" }}>
        <NavBar />
        <VStack align="start" px={{ base: 6, md: 24 }} spacing={12} mt={10}>
          <Text fontSize='5xl'>Microsoft</Text>

          {/* Fundamentals */}
          <Box w="100%">
            <Grid
              templateColumns={{ base: "1fr", md: "200px 1fr" }}
              gap={6}
              alignItems="center"
            >
              <Image
                src={fundamentalsLogo}
                alt="Fundamentals"
                height="160px"
                objectFit="contain"
              />

              {renderCerts("fundamental")}
            </Grid>
          </Box>

          {/* Associate */}
          <Box w="100%">
            <Grid
              templateColumns={{ base: "1fr", md: "200px 1fr" }}
              gap={6}
              alignItems="center"
            >
              <Image
                src={associateLogo}
                alt="Associate"
                height="160px"
                objectFit="contain"
              />

              {renderCerts("associate")}
            </Grid>
          </Box>
        </VStack>
      </div>
    </motion.div>
  );
};

export default Certifications;
