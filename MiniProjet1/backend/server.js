const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const models = require('./models/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'eheh',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:8080', 
  credentials: true
}));

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return done(null, false, { message: 'Utilisateur introuvable' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Mot de passe incorrect' });
      }
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/home', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Bienvenue sur la page d'accueil, ${req.user.username} !`);
  } else {
    res.redirect('/login');
  }
});

app.get('/login', (req, res) => {
  res.send('<form method="POST" action="/login"><input name="username" /><input name="password" type="password" /><button type="submit">Se connecter</button></form>');
});

app.listen(3000, () => {
  console.log("Le serveur tourne sur le port 3000 !");
});
