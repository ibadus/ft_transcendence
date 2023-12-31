"use client";

import { Card } from "@web/components/card/card"
import Image from "next/image";
import { Tracker, Color } from "@tremor/react";
import { Button } from "@web/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@web/components/ui/tooltip"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@web/components/ui/dropdown-menu"
import { Eye, Swords, MoreHorizontal, Trophy, Gamepad2, Crown, UserPlus } from "lucide-react";
import GameHistory from "./_components/game-history";
import Link from "next/link";

interface Tracker {
	color: Color;
	tooltip: string;
}

export default function UserPage({ params }: { params: { id: string } }) {
	const user = {
		id: "1",
		name: "John Doe",
		online: true,
		inGame: false,
		pfp: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		isFriend: false,
		isOwnProfile: false,
		ranking: 2,
		totalGamesPlayed: 299,
		ratioWL: 2.99,
	}

	return (
		<>
			<Card className="mt-0">
				<div className="flex items-center justify-center my-4">
					<Image
						src={user.pfp}
						width={80}
						height={80}
						className="rounded-full hover:opacity-90 w-20 h-20"
						alt="avatar"
						loading="eager"
					/>
				</div>
				<div className="flex items-center justify-center">
					{user && user.online ? <span className="w-3 h-3 bg-green-500 rounded-full mr-1" /> : <span className="w-3 h-3 bg-gray-500 rounded-full mr-1" />}
					<h4 className="text-2xl font-semibold text-white">{user.name}</h4>
				</div>
				<div>
					<p className="text-sm font-medium text-center text-gray-300">{user && user.inGame ? "In Game" : "Not playing"}</p>
				</div>
				<div className="flex justify-center mt-3">
					{user && user.isOwnProfile ?
						<>
							<Link href={"/profile"}>
								<Button size="sm" className="h-8 font-medium">
									Edit Profile
								</Button>
							</Link>
						</>
						:
						<>
							{user && !user.isFriend &&
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger disabled={user.isOwnProfile} asChild>
											<Button size="sm" variant="ghost" className="hover:bg-gray-700">
												<UserPlus className="h-4 w-4" />
											</Button>
										</TooltipTrigger>
										<TooltipContent>
											<p>Add Friend</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							}

							{user && user.inGame ?
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger disabled={user.isOwnProfile} asChild>
											<Button size="sm" variant="ghost" className="hover:bg-gray-700">
												<Eye className="h-4 w-4" />
											</Button>
										</TooltipTrigger>
										<TooltipContent>
											<p>View Game</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
								:
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger disabled={user.isOwnProfile} asChild>
											<Button size="sm" variant="ghost" className="hover:bg-gray-700">
												<Swords className="h-4 w-4" />
											</Button>
										</TooltipTrigger>
										<TooltipContent>
											<p>Start Game</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							}
							<DropdownMenu>
								<DropdownMenuTrigger asChild disabled={user.isOwnProfile}>
									<Button variant="ghost" size="sm" className="hover:bg-gray-700 h-9 w-10">
										<MoreHorizontal className="h-4 w-4" />
										<span className="sr-only">More</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>
										Block friend
									</DropdownMenuItem>
									{user && user.isFriend &&
										<DropdownMenuItem>
											Remove friend
										</DropdownMenuItem>}
								</DropdownMenuContent>
							</DropdownMenu>
						</>
					}
				</div>

				<div className="m-6">
					<div className="mb-2">
						<h4 className="text-2xl font-semibold text-foreground text-center">Stats</h4>
					</div>
					<div className="flex justify-center">
						<Card className="my-0 mx-3 w-40">
							<div className="p-3">
								<h4 className="text-sm font-medium text-muted-foreground">Ranking <Trophy className="w-4 h-4 inline float-right text-muted-foreground" /></h4>
								<p className="mt-3 text-2xl font-bold text-foreground">
									#2
								</p>
							</div>
						</Card>
						<Card className="my-0 mx-3 w-56">
							<div className="p-3">
								<h4 className="text-sm font-medium text-muted-foreground">Total Games Played <Gamepad2 className="w-4 h-4 inline float-right text-muted-foreground" /></h4>
								<p className="mt-3 text-2xl font-bold text-foreground">
									299
								</p>
							</div>
						</Card>
						<Card className="my-0 mx-3 w-40">
							<div className="p-3">
								<h4 className="text-sm font-medium text-muted-foreground">Ratio W/L <Crown className="w-4 h-4 inline float-right text-muted-foreground" /></h4>
								<p className="mt-3 text-2xl font-bold text-foreground">
									2.99
								</p>
							</div>
						</Card>
					</div>
				</div>

			</Card>

			<Card>
				<div className="p-6">
					<h4 className="text-2xl font-semibold text-white">History</h4>
					<p className="my-3 dark:text-gray-300">
						History of games played
					</p>
					<div className="max-h-96 overflow-scroll">
						<GameHistory />
					</div>
				</div>
			</Card>
		</>
	)
}