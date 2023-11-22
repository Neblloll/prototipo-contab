import db from "./SQLiteDatabse";

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS notasFiscais (id INTEGER PRIMARY KEY AUTOINCREMENT, numero TEXT NOT NULL, dataDeEmissao TEXT NOT NULL, codVerficacao TEXT NOT NULL, issRetido TEXT  NOT NULL, competencia TEXT NOT NULL, valorLiquido TEXT NOT NULL, baseDeCalculo TEXT NOT NULL, valor TEXT NOT NULL, codTributacaoMunicipal TEXT NOT NULL, desconto TEXT NOT NULL, discriminacaoDosServicos TEXT NOT NULL, cpfCnpj TEXT NOT NULL, razaoReduzida TEXT NOT NULL, bairro TEXT NOT NULL, uf TEXT NOT NULL, pagamento TEXT NOT NULL, vencimento TEXT NOT NULL, juros TEXT NOT NULL, valorPago TEXT NOT NULL, dataImportacao TEXT NOT NULL, impostoRetido TEXT NOT NULL, jurosMultaAbandono TEXT NOT NULL, mesAno TEXT NOT NULL, concluded TEXT);"
  );
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO notasFiscais (numero, dataDeEmissao, codVerficacao, issRetido, competencia, valorLiquido, baseDeCalculo, valor, codTributacaoMunicipal, desconto, discriminacaoDosServicos, cpfCnpj, razaoReduzida, bairro, uf, pagamento, vencimento, juros, valorPago, dataImportacao, impostoRetido, jurosMultaAbandono, mesAno, concluded) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
        [obj.numero, obj.dataDeEmissao, obj.codVerficacao, obj.issRetido, obj.competencia, obj.valorLiquido, obj.baseDeCalculo, obj.valor, obj.codTributacaoMunicipal , obj.desconto , obj.discriminacaoDosServicos , obj.cpfCnpj , obj.razaoReduzida , obj.bairro , obj.uf , obj.pagamento , obj.vencimento , obj.juros , obj.valorPago , obj.dataImportacao, obj.impostoRetido, obj.jurosMultaAbandono, obj.mesAno, obj.concluded],
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
        "UPDATE notasFiscais SET numero=?, dataDeEmissao=?, codVerficacao=?, issRetido=?, competencia=?, valorLiquido=?, baseDeCalculo=?, valor=?, codTributacaoMunicipal=?, desconto=?, discriminacaoDosServicos=?, cpfCnpj=?, razaoReduzida=?, bairro=?, uf=?, pagamento=?, vencimento=?, juros=?, valorPago=?, dataImportacao=?, impostoRetido=?, jurosMultaAbandono=?, mesAno=?, concluded=? WHERE id=?;",
        [obj.numero, obj.dataDeEmissao, obj.codVerficacao, obj.issRetido, obj.competencia, obj.valorLiquido, obj.baseDeCalculo, obj.valor, obj.codTributacaoMunicipal , obj.desconto , obj.discriminacaoDosServicos , obj.cpfCnpj , obj.razaoReduzida , obj.bairro , obj.uf , obj.pagamento , obj.vencimento , obj.juros , obj.valorPago , obj.dataImportacao, obj.impostoRetido, obj.jurosMultaAbandono, obj.mesAno, obj.concluded, id],
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
        "SELECT * FROM notasFiscais WHERE id=?;",
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

const findByNumber = (numero) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM notasFiscais WHERE numero LIKE ?;",
        [numero],
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array);
          else reject("Obj not found: numero = " + numero);
        },
        (_, error) => reject(error) 
      );
    });
  });
};

const findByConcluded = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM notasFiscais WHERE concluded=true;",
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) 
      );
    });
  });
};

const findByNotConcluded = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM notasFiscais WHERE concluded=false;",
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) 
      );
    });
  });
};

const all = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM notasFiscais;",
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
        "DELETE FROM notasFiscais WHERE id=?;",
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
        'DROP TABLE notasFiscais;', [],
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
  findByNumber,
  all,
  remove,
  findByConcluded,
  findByNotConcluded,
  deleteTable
};