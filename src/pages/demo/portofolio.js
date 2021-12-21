import React, { useState, useEffect } from 'react';
import {
  Grid,
  Container,
  CssBaseline,
}
from '@material-ui/core';
import Header from "@components/Header/Header";
import Layout from "@components/layout";
import SEO from "@components/seo";
import GlobalStyle from "@styles/global/globalStyled";
import useStyles from "@styles/demo/portofolioStyle";
import CandyPastel from "../../assets/demo/candy-pastel.png";
import ComingSoon from "../../assets/demo/coming-soon.png";
import LeafOfLove from "../../assets/demo/leaf-of-love.png";
import ModernMinimalism from "../../assets/demo/modern-minimalism.png";
import ChevronDown from "../../assets/svg/chevron-down.svg";
import FilterIcon from "../../assets/svg/filter-icon.svg";
import * as Style from "@styles/demo/portofolioStyled";

const DemoPortofolio = () => {
  const classes = useStyles();
  const [ themes ] = useState([
    {
      id: 1,
      image: CandyPastel,
      name: 'Candy Pastel',
      url: 'theme/first',
      type: 'silver',
      tags: 'pastel'
    },
    // {
    //   id: 2,
    //   image: ModernMinimalism,
    //   name: 'Solid Minimalism',
    //   url: 'theme/platinum/platinum',
    //   type: 'gold',
    //   tags: ['minimalist']
    // },
    {
      id: 3,
      image: ModernMinimalism,
      name: 'Modern Minimalism',
      url: 'theme/platinum/platinum',
      type: 'platinum',
      tags: 'minimalist'
    },
    {
      id: 4,
      image: LeafOfLove,
      name: 'Leaf of Love',
      url: 'theme/second',
      type: 'silver',
      tags: 'floral'
    },
    {
      id: 5,
      image: ComingSoon,
      name: 'Coming Soon',
      url: 'demo/portofolio/#',
      type: null,
      tags: []
    }
  ]);

  const redirectTemplate = (url) => {
    window.location.href = `/${url}`;
  }

  const primarySort = [
    { id: 1, text: "popular" },
    { id: 2, text: "silver" },
    { id: 3, text: "gold" },
    { id: 4, text: "platinum" },
  ];

  // const sortList = [
  //   { id: 1, text: "all" },
  //   { id: 2, text: "minimalist" },
  //   { id: 3, text: "rustic" },
  //   { id: 4, text: "floral" },
  //   { id: 5, text: "silver" },
  //   { id: 6, text: "gold" },
  //   { id: 7, text: "platinum" },
  // ];

  const primaryFilter = [
    // { id: 1, text: "rustic" },
    { id: 2, text: "minimalist" },
    { id: 3, text: "floral" },
    { id: 4, text: "pastel" },
  ]

  const [ sortActive, setSortActive ] = useState(false);
  const [ sortName, setSortName ] = useState("popular");
  const [ dropdownSortActive, setDropdownSortActive ] = useState();

  // const [ sortListActive, setSortListActive ] = useState();
  const [ filterActive, setFilterActive ] = useState(false);

  const [ products, setProducts ] = useState(themes);
  const [ category, setCategory ] = useState("all");
  const [ themeTag, setThemeTag ] = useState("all");

  const handleSortChange = value => () => {
    switch (value) {
      case "popular":
        setCategory("all")
        setSortName(value)
        setSortActive(true)
        setDropdownSortActive(value.text)
        break;
      case "silver":
        setCategory(value)
        setSortName(value)
        setSortActive(true)
        setDropdownSortActive(value.text)
        break;
      case "gold":
        setCategory(value)
        setSortName(value)
        setSortActive(true)
        setDropdownSortActive(value.text)
        break;
      case "platinum":
        setCategory(value)
        setSortName(value)
        setSortActive(true)
        setDropdownSortActive(value.text)
        break;
      default: break;
    }
  }

  const handleFilterChange = value => () => {
    switch (value) {
      case "rustic":
        setThemeTag(value)
        break;
      case "floral":
        setThemeTag(value)
        break;
      case "minimalist":
        setThemeTag(value)
        break;
      case "pastel":
        setThemeTag(value)
        break;
      default: break;
    }
  }

  const primarySortList = primarySort.map((value, key) =>
    <li
      key={key}
      className={`${dropdownSortActive ? "active" : ""}`}
      onClick={handleSortChange(value.text)}
    >
      <a>{value.text}</a>
    </li>
  );

  const primaryFilterList = primaryFilter.map((value, key) =>
    <li
      key={key}
      className={`${dropdownSortActive ? "active" : ""}`}
      onClick={handleFilterChange(value.text)}
    >
      <a>{value.text}</a>
    </li>
  );

  // const sortListCategory = sortList.map((value, key) =>
  //     <li key={key} className={`${sortListActive == value.id ? 'active' : ''}`} onClick={() => setSortListActive(value.id)}>
  //       <a>{value.text}</a>
  //     </li>
  // );

  useEffect(() => {
    let filteredProducts = themes;

    if (category !== "all") {
      filteredProducts = filteredProducts.filter(product => product.type === category)
    }

    setProducts(filteredProducts)
  }, [category])

  useEffect(() => {
    let filteredProducts = themes;

    if (themeTag !== "all") {
      filteredProducts = filteredProducts.filter(product => product.tags === themeTag)
    }

    setProducts(filteredProducts)
  }, [themeTag])


  return (
    <React.Fragment>
      <SEO />
      <GlobalStyle />
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
      </Container>

      <Style.HeroContent>
        <Style.Title>Pilih Desain Undangan Kesukaan Kamu</Style.Title>
        <Style.Description>
          Tersedia berbagai macam desain yang sesuai dengan preferensi kamu. Mulai dari minimalis, rustic, floral, elegan, pastel sampai custom.
        </Style.Description>
        <Style.InnerContent/>
      </Style.HeroContent>

      <Layout>
        <Container className={classes.cardGrid} maxWidth="md">

          <Style.CategoryContainer>
            <Style.FilterView>
              <Style.DrowdownSort>
                <Style.DropdownLink onClick={() => setSortActive(!sortActive) || setFilterActive(false)}>
                  <Style.DropdownImage src={ChevronDown} alt="chevron"/>
                  <span>{sortName}</span>
                  <Style.DropdownOptions className={`${sortActive ? "active" : ""}`}>
                    <ul>
                      {primarySortList}
                    </ul>
                  </Style.DropdownOptions>
                </Style.DropdownLink>
              </Style.DrowdownSort>
            </Style.FilterView>
            {/* <Style.FilterCategory>
              <Style.Category>
                {sortListCategory}
              </Style.Category>
            </Style.FilterCategory> */}
            <Style.FilterSetting>
              <Style.FilterButton onClick={() => setFilterActive(!filterActive) || setSortActive(false)}>
                <Style.FilterImage src={FilterIcon} alt="filter-icon"/>
                <span>Filter</span>
                <Style.DropdownFilterOptions className={`${filterActive ? "active" : ""}`}>
                    <ul>
                      {primaryFilterList}
                      {/* <li>
                        <a>Rustic</a>
                      </li>
                      <li>
                        <a>Minimalist</a>
                      </li>
                      <li>
                        <a>Floral</a>
                      </li>
                      <li>
                        <a>Pastel</a>
                      </li> */}
                    </ul>
                  </Style.DropdownFilterOptions>
              </Style.FilterButton>
            </Style.FilterSetting>
          </Style.CategoryContainer>

          <Grid container spacing={4}>
            {products.length === 0 ? (
              <>
                <Grid item xs={12} sm={12} md={12}>
                  <Style.ProductNotAvailable>Belum ada tema</Style.ProductNotAvailable>
                </Grid>
              </>
            ) : (
              <>
                {products.map((value, key) => (
                  <Grid item key={key} xs={6} sm={6} md={4}>
                    <Style.ThemeCard onClick={() => redirectTemplate(value.url)}>
                      <Style.ThemeImage src={value.image} alt={value.name} width="150" height="auto"/>
                      <Style.ThemeName>{value.name}</Style.ThemeName>
                    </Style.ThemeCard>
                  </Grid>
                ))}
              </>
            )}

          </Grid>
        </Container>
      </Layout>

    </React.Fragment>
  );
}

export default DemoPortofolio;
