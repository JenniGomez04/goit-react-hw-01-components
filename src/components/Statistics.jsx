import PropTypes from 'prop-types';
import { SectionContenedor, TitleStatistics, ListUl, List, Label, Percentage } from './Statistics.styled';
// CON METODO RANDOM

const Statistics = ({ title, stats }) => {
  return (
    <SectionContenedor className="statistics">
      {title && <TitleStatistics className="title">{title}</TitleStatistics>}
      <ListUl className="stat-list">
        {stats.map((item) => (
          <List
            key={item.id}
            className="item"
            style={{ backgroundColor: `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, 0.5)` }}
          >
            <Label className="label">{item.label} </Label>
            <Percentage className="percentage">{item.percentage} %</Percentage>
          </List>
        ))}
      </ListUl>
    </SectionContenedor>
  );
};


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;



/*
// SIN METODO RANDOM
let Statistics = ({ title, stats }) => {
  let statItems = stats.map((item) => (
    <li class="item">
      <span class="label">{item.label}</span>
      <span class="percentage">{item.percentage}%</span>
    </li>
  ));

  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul class="stat-list">{statItems}</ul>
    </section>
  );
};*/
