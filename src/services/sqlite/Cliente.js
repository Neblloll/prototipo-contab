import db from "./SQLiteDatabse";

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeRazaoSocial TEXT, cpfOuCnpj TEXT, inscricaoMunicipal TEXT, cep INT, uf TEXT, endereco TEXT, numeroEndereco INT);"
  );
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO clientes (nomeRazaoSocial, cpfOuCnpj, inscricaoMunicipal, cep, uf, endereco, numeroEndereco) values (?, ?, ?, ?, ?, ?, ?);",
        [obj.nomeRazaoSocial, obj.cpfOuCnpj, obj.inscricaoMunicipal, obj.cep, obj.uf, obj.endereco, obj.numeroEndereco],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error inserting obj: " + JSON.stringify(obj));
        },
        (_, error) => reject(error)
      );
    });
  });
};

const update = (id, obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE clientes SET nomeRazaoSocial=?, cpfOuCnpj=?, inscricaoMunicipal=?, cep=?, uf=?, endereco=?, numeroEndereco=? WHERE id=?;",
        [obj.nomeRazaoSocial, obj.cpfOuCnpj, obj.inscricaoMunicipal, obj.cep, obj.uf, obj.endereco, obj.numeroEndereco, id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj: id=" + id);
        },
        (_, error) => reject(error)
      );
    });
  });
};

const find = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM clientes WHERE id=?;",
        [id],
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject("Obj not found: id=" + id);
        },
        (_, error) => reject(error)
      );
    });
  });
};

const findByName = (nomeRazaoSocial) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM clientes WHERE nomeRazaoSocial LIKE ?;",
        [nomeRazaoSocial],
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array);
          else reject("Obj not found: Nome / RazaoSocial=" + nomeRazaoSocial);
        },
        (_, error) => reject(error) 
      );
    });
  });
};

const all = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM clientes;",
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) 
      );
    });
  });
};

const remove = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM clientes WHERE id=?;",
        [id],
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => reject(error) 
      );
    });
  });
};

const deleteTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DROP TABLE clientes;', [],
        (tx, results) => {
          if (results && results.rows && results.rows._array) {
            /* do something with the items */
            // results.rows._array holds all the results.
            console.log(JSON.stringify(results.rows._array));
            console.log('table dropped')
          } else {
            console.log('no results')
          }
        },
        (tx, error) => {
          console.log(error);
        }
      )
    });
    });
}

export default {
  create,
  update,
  find,
  findByName,
  all,
  remove,
  deleteTable
};