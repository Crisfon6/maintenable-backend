# Base Backend

Folders and reponsabilities: 
    -   Model: Mongoose model
    -   Repository : has all interactions directly with the database
    -   Services:   is the layer between the controller and the repository, also manage errors and has the responsabilities of no allow 
                    arrive bad information to the repository (elements already created)
    -   Controller: This layer is the most externally has the request an response use the service for all your operations
    -   Helpers functions used on severals parts of the code
    -   utils functions little bit used
    -   db connection db