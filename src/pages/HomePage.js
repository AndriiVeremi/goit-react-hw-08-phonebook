export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <p>Heloo! This is app PhoneBook for contacts.</p>
        <p>
          The app is user friendly and intuitive so you can easily create your
          own phonebook without any hassle.
        </p>
        <p>
          So don't wait anymore, get your own phonebook now and make organizing
          and managing your contacts easy and hassle-free!
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: 'calc(100vh - 250px)',
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
    // fontFamily: 'Times New Roman',
  },
};
