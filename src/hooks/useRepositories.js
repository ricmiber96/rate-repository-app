
import {useState,useEffect} from "react";
import { useQuery } from "@apollo/client";
import {GET_REPOSITORIES} from '../graphql/queries'


const useRepositories = () => {

    const [repositories, setRepositories] = useState(null)
    const fetchRepositories = async () => {
      const response = await globalThis.fetch('http://192.168.169.186:5000/api/repositories')  
      const json = await response.json()
      setRepositories(json)
    }
  
    useEffect(()=>{
      fetchRepositories()
    },[])
  
    const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : []

    return {repositories: repositoriesNodes}
  }

export default useRepositories

// const useRepositories = () => {
//   const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
//   const { repositories = null } = data

//   const repositoriesNodes = repositories
//     ? repositories.edges.map(edge => edge.node)
//     : []

//   return { loading, repositories: repositoriesNodes, refetch }
// }

// export default useRepositories