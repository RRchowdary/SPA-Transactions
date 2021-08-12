import { useQuery, gql } from "@apollo/client";
import "./styles.css";

function Transactions() {
  const { loading, data, error } = useQuery(gql`
    {
      transactions {
        id
        amount
        date
      }
    }
  `);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>error</p>;

  return data.transactions.map(({ amount, date, id }) => (
    <div key={id} className="transaction">
      <p>
        {date}~~{amount}
      </p>
    </div>
  ));
}

export default function App() {
  return (
    <div className="App">
      <h1>My Transactions</h1>
      <h2>List of Transactions</h2>
      <div className="tcontainer">
        <Transactions />
      </div>
    </div>
  );
}
