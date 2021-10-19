module.exports = {
  widget: {
    'path': './src/style/index.scss',
    'pre': 'scss'
  },
  themes: [
    {
      'name': 'redblack',
      'custom': {
        '--color-brand': '#e72528'
      }
    },
    {
      'name': 'blue',
      'custom': {
        '--color-brand': '#2080f7',
        '--menu-item-fill': '#f0f0f0',
        '--menu-item-color': 'rgba(0,0,0,.7)',
        '--menu-item-hover-fill': 'rgba(0,0,0,.04)',
        '--menu-item-hover-color': 'rgba(0,0,0,.7)',
        '--menu-item-pre-fill': 'rgba(0,0,0,.08)',
        '--menu-item-active-fill': 'rgba(0,0,0,.08)',
        '--menu-item-active-color': 'rgba(0,0,0,.9)',
        '--menu-sub-fill': 'rgba(0,0,0,.08)',
        '--menu-dividing-fill': 'rgba(0,0,0,.12)',
        '--menu-box-shadow': '1px 0 0 0 rgba(0,0,0,.12)'
      }
    }
  ]
}
