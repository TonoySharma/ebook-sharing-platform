"use client"

import React, { useState } from 'react';
import {
  Select,
  Label,
  Header,
  ListBox,
  InputGroup,
  TextField,
  Button
} from "@heroui/react";
import FadeUp from './FadeUp';
import { redirect } from 'next/navigation';

const GENRES = ["All", "Fantasy", "Mystery", "Sci-Fi", "Drama", "Thriller"];
const PRICE_RANGES = [
  { label: "All Prices", value: "all" },
  { label: "Under 200 ৳", value: "0-200" },
  { label: "200 ৳ - 400 ৳", value: "200-400" },
  { label: "Over 400 ৳", value: "400-above" }
];

export default function EbookFilter() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const onSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.search.value);
    redirect(`/browse-ebook?search=${e.target.search.value}`);

  }


  return (
    <FadeUp>

      <form onSubmit={onSubmit} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end', padding: '16px', background: '#f9f9f9', borderRadius: '8px' }}>


        <div style={{ flex: '1', minWidth: '250px' }}>
          <TextField value={search} onChange={(value) => setSearch(value)}>
            <Label>Search eBooks</Label>
            <InputGroup>
              <InputGroup.Prefix>🔍</InputGroup.Prefix>
              <InputGroup.Input name="search" placeholder="Search by title or writer..." />
            </InputGroup>
          </TextField>
        </div>


        <div style={{ width: '200px' }}>
          <Select selectedKey={selectedGenre} onSelectionChange={(key) => setSelectedGenre(key)}>
            <Label>Genre</Label>
            <Select.Trigger>
              <Select.Value>{selectedGenre}</Select.Value>
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Section>
                  <Header>Select Genre</Header>
                  {GENRES.map((genre) => (
                    <ListBox.Item key={genre} id={genre}>
                      <Label>{genre}</Label>
                    </ListBox.Item>
                  ))}
                </ListBox.Section>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>


        <div style={{ width: '200px' }}>
          <Select selectedKey={selectedPriceRange} onSelectionChange={(key) => setSelectedPriceRange(key)}>
            <Label>Price Range</Label>
            <Select.Trigger>
              <Select.Value>
                {PRICE_RANGES.find(p => p.value === selectedPriceRange)?.label || "All Prices"}
              </Select.Value>
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Section>
                  <Header>Select Budget</Header>
                  {PRICE_RANGES.map((range) => (
                    <ListBox.Item key={range.value} id={range.value}>
                      <Label>{range.label}</Label>
                    </ListBox.Item>
                  ))}
                </ListBox.Section>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>


        <div>
          <Button type="submit" color="primary">
            Search
          </Button>
        </div>

      </form>
    </FadeUp>
  );
}