import { Metadata } from "next";
import Tabel from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  const filteredCustomers = await fetchFilteredCustomers(query);

  return <Tabel customers={filteredCustomers} />;
}
