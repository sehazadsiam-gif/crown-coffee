const express = require('express');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// INVENTORY
app.get('/api/inventory', async (req, res) => {
  const { data, error } = await supabase.from('inventory').select('*').order('id');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});
app.post('/api/inventory', async (req, res) => {
  const { data, error } = await supabase.from('inventory').insert([req.body]).select();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data[0]);
});
app.delete('/api/inventory/:id', async (req, res) => {
  const { error } = await supabase.from('inventory').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true });
});

// PROFITS
app.get('/api/profits', async (req, res) => {
  const { data, error } = await supabase.from('profits').select('*').order('date', { ascending: false });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});
app.post('/api/profits', async (req, res) => {
  const { data, error } = await supabase.from('profits').insert([req.body]).select();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data[0]);
});
app.delete('/api/profits/:id', async (req, res) => {
  const { error } = await supabase.from('profits').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true });
});

// STAFF
app.get('/api/staff', async (req, res) => {
  const { data, error } = await supabase.from('staff').select('*').order('id');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});
app.post('/api/staff', async (req, res) => {
  const { data, error } = await supabase.from('staff').insert([req.body]).select();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data[0]);
});
app.delete('/api/staff/:id', async (req, res) => {
  const { error } = await supabase.from('staff').delete().eq('id', req.params.id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`☕ Crown Coffee running at http://localhost:${PORT}`));
