import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions/categories";
import { capitalize } from "../../utils/helpers";

class Navbar extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="logo" style={styles.header}>
          <Link to="/" style={styles.logoLink}>
            Readable
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto ml-3">
            {categories.length > 0 && categories.map((category, key) => (
                <li className="nav-item" key={key + 2}>
                  <Link className="nav-link" to={`/${category.name}`}>
                    {capitalize(category.name)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>;
  }
}

const styles = {
  header: {
    paddingLeft: 16,
    color: "#fff"
  },
  logoLink: {
    fontSize: 24,
    color: "#fff"
  }
};

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
