import type { GetServerSidePropsContext, NextPage } from "next";
import { Title } from "components/title";
import { useSession } from "next-auth/react";
import { Divider } from "@chakra-ui/react";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { MakeTodo } from "components/makeTodo";
import { Todos } from "components/todos";

const Home: NextPage = () => {
    const { data: session } = useSession()!;

    return (
        <div>
            <Title
                title="home page"
                description="this is the home page of our application"
            />

            <main>
                <Todos />
            </main>
        </div>
    );
};

export async function getServerSideProps<GetServerSideProps>(
    context: GetServerSidePropsContext,
) {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions,
    );
    return {
        props: {
            session,
        },
    };
}

export default Home;
