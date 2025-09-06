import { useState } from "react";
import { fetchUserData } from "./services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username.trim());
      setUserData(data);
    } catch {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>

      {loading && <p style={styles.message}>Loading...</p>}
      {error && <p style={{ ...styles.message, color: "red" }}>{error}</p>}

      {userData && (
        <div style={styles.card}>
          <img
            src={userData.avatar_url}
            alt={`${userData.login} avatar`}
            style={styles.avatar}
          />
          <h2>{userData.name || userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "250px",
    border: "1px solid #ccc",
    borderRadius: "4px 0 0 4px",
  },
  button: {
    padding: "10px 16px",
    fontSize: "16px",
    border: "none",
    borderRadius: "0 4px 4px 0",
    backgroundColor: "#24292e",
    color: "#fff",
    cursor: "pointer",
  },
  message: {
    fontSize: "18px",
    marginTop: "20px",
  },
  card: {
    border: "1px solid #eee",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "300px",
    margin: "0 auto",
    backgroundColor: "#fafafa",
  },
  avatar: {
    width: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
};

export default Search;

// import { useState } from "react";

// function Search({ onSearch }) {
//   const [username, setUsername] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username.trim() === "") return;
//     onSearch(username.trim());
//   };

//   return (
//     <form onSubmit={handleSubmit} style={styles.form}>
//       <input
//         type="text"
//         placeholder="Enter GitHub username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         style={styles.input}
//       />
//       <button type="submit" style={styles.button}>
//         Search
//       </button>
//     </form>
//   );
// }

// const styles = {
//   form: {
//     display: "flex",
//     justifyContent: "center",
//     margin: "20px 0",
//   },
//   input: {
//     padding: "10px",
//     fontSize: "16px",
//     width: "250px",
//     border: "1px solid #ccc",
//     borderRadius: "4px 0 0 4px",
//     outline: "none",
//   },
//   button: {
//     padding: "10px 16px",
//     fontSize: "16px",
//     border: "none",
//     borderRadius: "0 4px 4px 0",
//     backgroundColor: "#24292e",
//     color: "#fff",
//     cursor: "pointer",
//   },
// };

// export default Search;
