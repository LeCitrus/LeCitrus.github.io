import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Certification from "../components/Certification";
import {
  Box,
  VStack,
  Text,
  SimpleGrid,
  Image,
  Grid,
} from "@chakra-ui/react";
import { certifications, CertificationLevel } from "../data/certifications";
import PageTransition from "../components/PageTransition";

import fundamentalsLogo from "../images/ms-fundamentals.svg";
import associateLogo from "../images/ms-associate.svg";
import serviceNowCSA from "../images/servicenow-csa.png";
import serviceNowCAD from "../images/servicenow-cad.png";

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
    <PageTransition>
      <div className="App">
        <Header title="Certifications" />
      </div>

      <div style={{ overflow: "hidden" }}>
        <NavBar />
        <VStack align="start" px={{ base: 6, md: 24 }} spacing={12} mt={10}>

          {/* Microsoft */}
          <Text fontSize="5xl">Microsoft</Text>

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

          {/* ServiceNow */}
          <Text fontSize="5xl">ServiceNow</Text>

          <Box w="100%">
            <Grid
              templateColumns={{ base: "1fr", md: "200px 1fr" }}
              gap={6}
              alignItems="center"
            >
              <Image
                src={serviceNowCSA}
                alt="ServiceNow CSA"
                height="160px"
                objectFit="contain"
              />
              {renderCerts("servicenow-csa")}
            </Grid>
          </Box>

          <Box w="100%">
            <Grid
              templateColumns={{ base: "1fr", md: "200px 1fr" }}
              gap={6}
              alignItems="center"
            >
              <Image
                src={serviceNowCAD}
                alt="ServiceNow CAD"
                height="160px"
                objectFit="contain"
              />
              {renderCerts("servicenow-cad")}
            </Grid>
          </Box>

        </VStack>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default Certifications;