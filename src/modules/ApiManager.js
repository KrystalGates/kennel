const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (entity, id) {
            /*
                Since the purpose of this module is to be used by
                all of the more specialized one, then the string
                of `animals` should not be hard coded here.
            */
            return fetch(`${remoteURL}/${entity}/${id}`).then(e => e.json())
        }
    },
    all: {
        value: function (entity) {
            return fetch(`${remoteURL}/${entity}`).then(e => e.json())
        }
    },
    delete: {
        value: function (entity, id) {
            return fetch(`http://localhost:5002/${entity}/${id}`, {
                    method: "DELETE"
                })
                 .then(e => e.json())
                 .then(() => fetch(`http://localhost:5002/${entity}`))
        .then(e => e.json())
        }
    }
})