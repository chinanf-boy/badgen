const tap = require('tap')
const badgen = require('..')

tap.test('generate badge with { subject, status }', t => {
  const svg = badgen({ subject: 'npm', status: 'v1.0.0' })
  t.ok(typeof svg === 'string', 'successfully generated')
  t.matchSnapshot(svg, 'snapshot')
  t.end()
})

tap.test('generate badge with { subject, status, color }', t => {
  const svg = badgen({ subject: 'npm', status: 'v1.0.0', color: 'ADF' })
  t.ok(typeof svg === 'string', 'successfully generated')
  t.matchSnapshot(svg, 'snapshot')
  t.end()
})

tap.test('generate badge with { subject, status, style }', t => {
  const svg = badgen({ subject: 'npm', status: 'v1.0.0', style: 'flat' })
  t.ok(typeof svg === 'string', 'successfully generated')
  t.matchSnapshot(svg, 'snapshot')
  t.end()
})

tap.test('generate badge with { subject, status, color, style }', t => {
  const svg = badgen({ subject: 'npm', status: 'v1.0.0', color: 'ADF', style: 'flat' })
  t.ok(typeof svg === 'string', 'successfully generated')
  t.matchSnapshot(svg, 'snapshot')
  t.end()
})

tap.test('generate badge with { subject, status, icon }', t => {
  const icon = require('./docker-icon-b64.js')
  const svg = badgen({ subject: 'docker', status: 'icon', icon })
  t.matchSnapshot(svg, 'snapshot')
  t.end()
})

tap.test('generate badge with { subject, status, icon, style }', t => {
  const icon = require('./docker-icon-b64.js')
  const svg = badgen({ subject: 'docker', status: 'icon', style: 'flat', icon })
  t.matchSnapshot(svg, 'snapshot')
  t.end()
})
