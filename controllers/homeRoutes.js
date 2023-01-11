const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    const projectData = await projects.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    console.log(projectData);


    const projects = projectData.map((project) => project.get({ plain: true }));


    res.render('homepage', {
      projects,
      logged_in: req.session.logged_in,
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],

        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard/edit/:id', async (req, res) => {
  try {
    const projectData = await Blog.findByPk(req.params.id);

    const blog = projectData.get({ plain: true });

    res.render('edit', {
      blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard', withAuth, async (req, res) => {
  try {

    const blogData = await Blog.findAll({
      where: {
        user_id: req.session.user_id
      }
    })

    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render('profile', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard/add', withAuth, (req, res) => {
  res.render('add');
});

router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;