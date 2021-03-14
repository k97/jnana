import Head from 'next/head'
import { csrfToken } from 'next-auth/client'
import { CMS_NAME } from '../lib/constants'
import {
  Container, Heading, Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react"
import { Layout } from '../components/Layout/index'
import {
} from "@chakra-ui/react"
export default function SignIn({ csrfToken }: any) {
  return (
    <Layout>
      <Head>
        <title>Passphrase - {CMS_NAME}</title>
      </Head>

      <Container>
        <Heading as="h2" size="xl" className="ff-hero" mt={50} mb={50}>Private Information</Heading>


        <form className="db w-100 passphrase-form" method='post' action='/api/auth/callback/credentials'>
          <FormControl width="500px">
            <FormLabel fontSize="md">Please enter the passphrase to proceed to the project.</FormLabel>
            <Input type="hidden" name='csrfToken' defaultValue={csrfToken} />
            <Input type="text" name="username" required />
          </FormControl>
          <Button type="submit" size="md" width="200px" mt={4}>Submit</Button>
        </form>

        <Text mt={0} fontSize="sm">
          Some of the projects are locked down in adherence to the respective NDA(s). I intend to share these work only if required for referential purposes.
          <a className="ka-link dim" href="mailto:k97@outlook.in?subject=Access to Karthik's Portfolio">Drop me a message here,</a> to recieve the passphrase.
          </Text>

      </Container>
    </Layout>
  )
}

SignIn.getInitialProps = async (context: any) => {
  return {
    csrfToken: await csrfToken(context)
  }
}
