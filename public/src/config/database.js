module.exports = {
  db: "desafio_contabil",
  username: "sa",
  password: "sa",
  dialect: "sqlite",
  storage:
    process.env.NODE_ENV === "test"
      ? "./__tests__/desafio_contabil_data_test.sqlite"
      : "./src/database/desafio_contabil_data.sqlite",
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: false,
  },
};
