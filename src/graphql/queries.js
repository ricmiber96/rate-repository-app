import { gql } from 'apollo-boost'

export const GET_REPOSITORIES = gql`
query{
  repositories {
    edges {
      node {
        id
        ownerName
        name
        createdAt
        fullName
        ratingAverage
        reviewCount
        stargazersCount
        watchersCount
        forksCount
        openIssuesCount
        url
        ownerAvatarUrl
        description
        language
        userHasReviewed
      }
    }
  }
}`