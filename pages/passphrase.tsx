import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import { getSession, csrfToken } from 'next-auth/client'
import {
  Container, Heading, Text,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Alert,
  AlertDescription,
  AlertTitle
} from "@chakra-ui/react"

import { CMS_NAME } from '../lib/constants'
import { Layout } from '../components/Layout/index'

export default function SignIn({ csrfToken }: any) {

  const [isAlertVisible, setAlertVisible]: any = useState(false);
  const router = useRouter();


  useEffect(() => {
    setAlertVisible(false);
    if (router.query.error == 'CredentialsSignin') {
      setAlertVisible(true);
    }

  });

  return (
    <Layout>
      <Head>
        <title>Passphrase - {CMS_NAME}</title>
      </Head>

      <Container maxW="container.xl">
        <Heading as="h2" size="xl" className="ff-hero" mt={50} mb={10}>Private Information</Heading>

        <form method='post' action='/api/auth/callback/credentials'>
          <Text fontSize="2xl">Please enter the passphrase to proceed to the project.</Text>
          <FormControl width="600px">
            <Input type="hidden" name='csrfToken' defaultValue={csrfToken} />
            <Input type="text" name="username" size="lg" placeholder="*******" autoFocus isRequired variant="outline" isInvalid={isAlertVisible} />

            {isAlertVisible &&
              (<Alert status="error" mt={4} rounded="md" >
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Verify the passphrase and try again</AlertDescription>
              </Alert>)
            }

          </FormControl>
          <Button type="submit" size="lg" fontSize="xl" colorScheme="blue" width="200px" mt={4}>Unlock</Button>
        </form>

        <Box variant="subtle" mt={10} mb={10} borderWidth="0px" rounded="lg" boxShadow="xs" p="4">
          <Text fontSize="xl">
            Some of the projects are locked down in adherence to the respective NDA(s). I intend to share these work only for referential purposes. <a className="ka-link dim" href="mailto:k97@outlook.in?subject=Access to Karthik's Portfolio">Drop me a note here,</a> and I will setup you with the passphrase.
          </Text>
        </Box>

      </Container>
    </Layout>
  )
}

SignIn.getInitialProps = async (context: any) => {
  return {
    csrfToken: await csrfToken(context)
  }
}
