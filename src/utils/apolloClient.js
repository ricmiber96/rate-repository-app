import ApolloClient from 'apollo-boost'

const createApolloClient = () =>{
    return new ApolloClient({
        uri: 'http://192.168.168.117:5000/graphql'
    })
}


export default createApolloClient