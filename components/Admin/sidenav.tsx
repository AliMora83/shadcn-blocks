/* eslint-disable react/jsx-no-undef */
"use client"

import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import Link from "next/link";
import {
  Bell,
  BookOpen,
  Home,
  LineChart,
  Mail,
  Menu,
  Music4,
  Package,
  Package2,
  Users,
  Video,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from '@/lib/utils';


export default function Sidenav() {
  const pathname = usePathname();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 justify-between">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src="/nk_logo.png"
                alt="namka logo"
                width={140}
                height={140}
                className=""
              />
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard"
                className={cn(
                  "transition-colors hover:text-foreground/80 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                  pathname?.startsWith("/dashboard")
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground"
                )}
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/mail"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Mail
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>

              {/* TODO - Add all links  */}
              <Link
                href="/courses"
                className={cn(
                  "transition-colors hover:text-foreground/80 flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground",
                  pathname?.startsWith("/courses")
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground"
                )}
              >
                <BookOpen className="h-4 w-4" />
                Courses
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Video className="h-4 w-4" />
                Watch Movies
              </Link>
              <Link
                href="/music"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Music4 className="h-4 w-4" />
                Listen to Music
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


