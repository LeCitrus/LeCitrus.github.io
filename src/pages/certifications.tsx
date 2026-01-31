import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Certification from "../components/Certification";
import {
  Box,
  VStack,
  Text,
  SimpleGrid,
  Image,
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
          
          {/* Fundamentals */}
          <Box w="100%">
            <VStack align="start" spacing={4}>
              <Image src={fundamentalsLogo} alt="Fundamentals" height="80px" />
              <Text fontSize="4xl">Fundamentals</Text>
              {renderCerts("fundamental")}
            </VStack>
          </Box>

          {/* Associate */}
          <Box w="100%">
            <VStack align="start" spacing={4}>
              <Image src={associateLogo} alt="Associate" height="80px" />
              <Text fontSize="4xl">Associate</Text>
              {renderCerts("associate")}
            </VStack>
          </Box>

        </VStack>
      </div>
    </motion.div>
  );
};

export default Certifications;
