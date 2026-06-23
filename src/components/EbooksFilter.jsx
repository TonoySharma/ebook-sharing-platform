"use client"


import React, { useState, useMemo } from 'react';
import { 
  Select, 
  Label, 
  Description, 
  Header, 
  ListBox, 
  Separator, 
  InputGroup, 
  TextField 
} from "@heroui/react";
import FadeUp from './FadeUp';

// Sample genres and price ranges for the dropdowns
const GENRES = ["All", "Fantasy", "Mystery", "Sci-Fi", "Drama", "Thriller"];
const PRICE_RANGES = [
  { label: "All Prices", value: "all" },
  { label: "Under 200 ৳", value: "0-200" },
  { label: "200 ৳ - 400 ৳", value: "200-400" },
  { label: "Over 400 ৳", value: "400-above" }
];

export default function EbookFilter({ ebooks, onFilterChange }) {

  
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  // Handle filtering logic
  const filteredEbooks = useMemo(() => {
    return ebooks.filter((book) => {
      // 1. Text Search (Matches title or writer name)
      const matchesSearch = 
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.writer_name.toLowerCase().includes(search.toLowerCase());

      // 2. Genre Filter
      const matchesGenre = selectedGenre === "All" || book.genre === selectedGenre;

      // 3. Price Filter (uses discount_price if available, otherwise regular price)
      const activePrice = book.discount_price ?? book.price;
      let matchesPrice = true;
      if (selectedPriceRange === "0-200") matchesPrice = activePrice <= 200;
      else if (selectedPriceRange === "200-400") matchesPrice = activePrice > 200 && activePrice <= 400;
      else if (selectedPriceRange === "400-above") matchesPrice = activePrice > 400;

      return matchesSearch && matchesGenre && matchesPrice;
    });
  }, [search, selectedGenre, selectedPriceRange, ebooks]);

  // Pass the filtered results up to the parent component whenever they change
  React.useEffect(() => {
    onFilterChange(filteredEbooks);
  }, [filteredEbooks, onFilterChange]);

  return (
    <FadeUp>
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end', padding: '16px', background: '#f9f9f9', borderRadius: '8px' }}>
      
      {/* 1. Search Input Field */}
      <div style={{ flex: '1', minWidth: '250px' }}>
        <TextField value={search} onChange={(value) => setSearch(value)}>
          <Label>Search eBooks</Label>
          <InputGroup>
            <InputGroup.Prefix>🔍</InputGroup.Prefix>
            <InputGroup.Input placeholder="Search by title or writer..." />
          </InputGroup>
        </TextField>
      </div>

      {/* 2. Genre Filter Select */}
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

      {/* 3. Price Filter Select */}
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

    </div>
    </FadeUp>
  );
}