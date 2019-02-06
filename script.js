'use strict';


var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      imgUrl: 'https://cdn-images-1.medium.com/max/1600/1*FiXiocazv6hiy6YwUwKuoQ.png'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      imgUrl: 'https://www.taniefototapety.eu/pol_pl_Fototapeta-3203-KROL-LEW-63427_2.jpg'
    },
    {
      id: 3,
      title: 'Bohemian Rhapsody',
      desc: 'Film o zespole Queen',
      imgUrl: 'https://ssl-gfx.filmweb.pl/po/92/01/619201/7863181.3.jpg'
    },
    {
      id: 4,
      title: 'Skazani na Shawshank',
      desc: 'Film o bankierze w więzieniu',
      imgUrl: 'https://icdn.2cda.pl/vid/premium/1127811/299x446/8eda9798a97453d135cfd18e1e960141.jpg'
    },
    {
      id: 5,
      title: 'Zielona mila',
      desc: 'Film o skazanym za zabójstwo dwóch dziewczynek',
      imgUrl: 'https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.3.jpg'
    }
    
  ];

   var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return React.createElement('li', {},
            React.createElement(MovieTitle, {
                title: this.props.movie.title
            }),
            React.createElement(MovieDesc, {
                desc: this.props.movie.desc
            }),
            React.createElement(MovieImg, {
                imgUrl: this.props.movie.imgUrl
            })
        );
    }
});

  var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    
    render: function() {
        return React.createElement('h2', {}, this.props.title)
    },
 
  });

   var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    
    render: function() {
        return React.createElement('p', {}, this.props.desc)
    },
   
  });

  var MovieImg = React.createClass({
    propTypes: {
        imgUrl: React.PropTypes.string.isRequired,
    },
    
    render: function() {
        return React.createElement('img', {src: this.props.imgUrl})
    },
   
  });

  var MovieList = React.createClass({
    propTypes: {
        arrayContent: React.PropTypes.array.isRequired,
    },
    
    render: function() {
        var moviesElements = this.props.arrayContent.map(function (movie) {
                return React.createElement(Movie, {
                    movie: movie,
                    key: movie.id
                })
            });
            return React.createElement('ul', {}, moviesElements)
    }
  
  });  
 
  var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement(MovieList, {
      arrayContent: movies
  })
);

ReactDOM.render(element, document.getElementById('app'));