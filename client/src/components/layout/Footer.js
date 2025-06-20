import { Box, Container, Grid, Typography, Link, Divider, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const footerLinks = [
    {
      title: 'For Musicians',
      links: [
        { text: 'Create Profile', href: '/register' },
        { text: 'Find Jobs', href: '/projects' },
        { text: 'Success Stories', href: '/success-stories' },
        { text: 'Tips & Resources', href: '/resources' },
      ],
    },
    {
      title: 'For Clients',
      links: [
        { text: 'How It Works', href: '/how-it-works' },
        { text: 'Post a Project', href: '/post-project' },
        { text: 'Browse Musicians', href: '/musicians' },
        { text: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Careers', href: '/careers' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact Us', href: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FacebookIcon />, href: 'https://facebook.com' },
    { icon: <TwitterIcon />, href: 'https://twitter.com' },
    { icon: <InstagramIcon />, href: 'https://instagram.com' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com' },
  ];

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Session Musician Match
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              The platform connecting talented session musicians with recording projects worldwide.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton 
                  key={index} 
                  component="a" 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'white' }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {footerLinks.map((section, index) => (
            <Grid item xs={12} sm={4} md={2} key={index}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ p: 0, listStyle: 'none' }}>
                {section.links.map((link, linkIndex) => (
                  <Box component="li" sx={{ mb: 1 }} key={linkIndex}>
                    <Link
                      href={link.href}
                      sx={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}
                    >
                      {link.text}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ p: 0, listStyle: 'none' }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/terms" sx={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                  Terms of Service
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/privacy" sx={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                  Privacy Policy
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/cookies" sx={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                  Cookie Policy
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

        <Typography variant="body2" align="center" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          © {new Date().getFullYear()} Session Musician Match. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;