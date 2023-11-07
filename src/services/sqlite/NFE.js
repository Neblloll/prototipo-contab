import db from "./SQLiteDatabse";

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS notasFiscais (id INTEGER PRIMARY KEY AUTOINCREMENT, numero TEXT, dataDeEmissao TEXT, codVerfificacao TEXT, issRetido DOUBLE, competencia TEXT, valorLiquido DOUBLE, baseDeCalculo DOUBLE, valor DOUBLE, codTributacaoMunicipal TEXT, desconto DOUBLE, discriminacaoDosServicos TEXT, cpfCnpj TEXT, razaoReduzida TEXT, bairro TEXT, uf TEXT, pagamento DOUBLE, vencimento TEXT, juros DOUBLE, valorPago DOUBLE, dataImportacao TEXT, impostoRetido DOUBLE, jurosMultaAbandono TEXT, mesAno TEXT);"
  );
});

const create = (obj) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO notasFiscais (numero, dataDeEmissao, codVerfificacao, issRetido, competencia, valorLiquido, baseDeCalculo, valor, codTributacaoMunicipal, desconto, discriminacaoDosServicos, cpfCnpj, razaoReduzida, bairro, uf, pagamento, vencimento, juros, valorPago, dataImportacao, impostoRetido, jurosMultaAbandono, mesAno) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,);",
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
        "UPDATE notasFiscais SET numero, dataDeEmissao=?, codVerfificacao=?, issRetido=?, competencia=?, valorLiquido=?, baseDeCalculo=?, valor=?, codTributacaoMunicipal=?, desconto=?, discriminacaoDosServicos=?, cpfCnpj=?, razaoReduzida=?, bairro=?, uf=?, pagamento=?, vencimento=?, juros=?, valorPago=?, dataImportacao=?, impostoRetido=?, jurosMultaAbandono=?, mesAno WHERE id=?;",
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

export default {
  create,
  update,
  find,
  findByNumber,
  all,
  remove,
};