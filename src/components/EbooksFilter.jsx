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
import { redirect, useRouter } from 'next/navigation';


export default function EbookFilter() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const GENRES = ["All", "Fantasy", "Mystery", "Sci-Fi", "Drama", "Thriller"];
  const PRICE_RANGES = [
    { label: "All Prices", value: "all" },
    { label: "Under 200 ৳", value: "0-200" },
    { label: "200 ৳ - 400 ৳", value: "200-400" },
    { label: "Over 400 ৳", value: "400-above" }
  ];


  const onSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.search.value);
    router.push(
      `/browse-ebook?search=${search}&genre=${selectedGenre}&price=${selectedPriceRange}`
    );

  }


  return (
    <FadeUp>

      <form
        onSubmit={onSubmit}
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          padding: '16px',
          background: '#f9f9f9',
          borderRadius: '8px',
          width: '100%', // ensure form takes full width
          boxSizing: 'border-box'
        }}
      >

        {/* Search Block */}
        <div style={{ flex: '1 1 250px', width: '100%' }}>
          <TextField value={search} onChange={(value) => setSearch(value)} style={{ width: '100%' }}>
            <Label>Search eBooks</Label>
            <InputGroup style={{ width: '100%' }}>
              <InputGroup.Prefix>🔍</InputGroup.Prefix>
              <InputGroup.Input name="search" placeholder="Search by title or writer..." style={{ width: '100%' }} />
            </InputGroup>
          </TextField>
        </div>

        {/* Genre Block */}
        <div style={{ flex: '1 1 200px', width: '100%' }}>
          <Select selectedKey={selectedGenre} onSelectionChange={(key) => setSelectedGenre(key)}>
            <Label>Genre</Label>
            <Select.Trigger style={{ width: '100%' }}>
              <Select.Value>{selectedGenre || "Select Genre"}</Select.Value>
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Section>
                  <Header>Select Genre</Header>

                  {GENRES.map((genre) => (
                    <ListBox.Item
                      key={genre}
                      id={genre}
                      textValue={genre}
                    >
                      <Label>{genre}</Label>
                    </ListBox.Item>
                  ))}

                </ListBox.Section>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* Price Range Block */}
        <div style={{ flex: '1 1 200px', width: '100%' }}>
          <Select selectedKey={selectedPriceRange} onSelectionChange={(key) => setSelectedPriceRange(key)}>
            <Label>Price Range</Label>
            <Select.Trigger style={{ width: '100%' }}>
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
                    <ListBox.Item
                      key={range.value}
                      id={range.value}
                      textValue={range.label}
                    >
                      <Label>{range.label}</Label>
                    </ListBox.Item>
                  ))}

                </ListBox.Section>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>

        {/* Search Button Block */}
        <div style={{ flex: '1 1 auto', width: '100%', minWidth: '120px' }}>
          <Button type="submit" color="primary" style={{ width: '100%', height: '40px' }}>
            Search
          </Button>
        </div>

      </form>
    </FadeUp>
  );
}