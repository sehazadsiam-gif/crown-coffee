-- Run this in Supabase SQL Editor

create table inventory (
  id bigint generated always as identity primary key,
  name text not null,
  cat text,
  qty numeric,
  unit text,
  reorder numeric,
  cost numeric
);

create table profits (
  id bigint generated always as identity primary key,
  date date not null,
  sales numeric,
  cost numeric,
  profit numeric
);

create table staff (
  id bigint generated always as identity primary key,
  name text not null,
  role text,
  shift text,
  salary numeric,
  phone text,
  status text
);
