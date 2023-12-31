import { Button } from "@web/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@web/components/ui/avatar"
import { Input } from "@web/components/ui/input"
import { Gamepad2, Settings, Swords } from "lucide-react";
import { ScrollArea } from "@web/components/ui/scroll-area"
import { cn } from "@web/utils/utils";
import SettingsButtonAlertDialog from "./_components/settings-button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@web/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@web/components/ui/tooltip";
import Link from "next/link";

export default function Chat() {
	const chat = {
		id: "728ed52f",
		pfp: ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"],
		usernames: ["John Doe", "Jack Doe", "Jane Doe", "Jill Doe"],
		lastMessage: "Hello everyone this is a sick new chat app!",
		newMessages: 10,
		type: "private"
	}

	const messages = [
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 1,
			isFromUser: false,
			username: "John Doe",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
		{
			id: 2,
			isFromUser: true,
			username: "",
			userId: 1,
			avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			content: "Hello, how are you?",
		},
	]

	return (
		<div className="flex h-screen max-h-full">
			<section className="flex flex-col w-full">
				<header className="absolute top-0 p-[6px]">
					<div className="flex">
						<h2 className="text-xl font-bold flex items-center gap-2">
							{chat && chat.pfp.map((pfp, index) => {
								if (index >= 3) return null
								return (
									<Avatar className={cn("relative w-10 h-10 pointer-events-none", index > 0 && "-ml-4")} key={pfp + index}>
										<AvatarImage className="rounded-full" alt="User Avatar" src={pfp} />
										<AvatarFallback>U</AvatarFallback>
									</Avatar>
								)
							})}
							{chat && chat.pfp.length > 3 && (
								<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 -ml-4">
									+{chat.pfp.length - 3}
								</div>
							)}
							<div>
								{chat.usernames.length && chat.usernames.map((username, index) => {
									if (index >= 3) return null
									return (
										<span key={username + index}>
											{index > 0 && ", "}
											{username}
											{index == 2 && "..."}
										</span>
									)
								})}
								<span className="text-xs text-muted-foreground block">{chat.type}</span>
							</div>
						</h2>
						<SettingsButtonAlertDialog />
					</div>
				</header>
				<div className="flex-1 overflow-hidden max-h-screen">
					<ScrollArea className="pt-2 border-t dark:border-zinc-700 rounded h-96">
						{messages.map((message, index) => {
							if (message.isFromUser)
								return (
									<div className="flex items-end gap-2 justify-end" key={`${message.id}+${message.username}`}>
										<div className="rounded-lg bg-blue-500 text-white p-2 mr-3">
											<p className="text-sm">{message.content}</p>
										</div>
									</div>
								)
							return (

								<DropdownMenu key={message.avatar + index}>
									<DropdownMenuTrigger className="hover:opacity-70">
										<div className="flex items-end gap-2">
											<Avatar className="relative overflow-visible w-10 h-10">
												<AvatarImage alt="User Avatar" src={message.avatar} className="rounded-full" />
												<AvatarFallback>{message.username[0].toLocaleUpperCase()}</AvatarFallback>
											</Avatar>
											<div className="rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2">
												<p className="font-extrabold text-left">{message.username}</p>
												<p className="text-sm">{message.content}</p>
											</div>
										</div>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<Link href={`/profile/${message.userId}`}>
											<DropdownMenuItem>
												View Profile
											</DropdownMenuItem>
										</Link>
										<DropdownMenuItem>
											Block
										</DropdownMenuItem>
										<DropdownMenuItem>
											Mute 10min
										</DropdownMenuItem>
										<DropdownMenuItem>
											Kick
										</DropdownMenuItem>
										<DropdownMenuItem>
											Ban
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							)
						})}
					</ScrollArea>
					<div className="bottom-0 p-4 border-t dark:border-zinc-700">
						<div className="flex items-center gap-2">
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<Button size="sm" variant="ghost" className="hover:bg-gray-700">
											<Gamepad2 className="w-6 h-6" />
										</Button>
									</TooltipTrigger>
									<TooltipContent>
										<p>Start Game</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
							<Input className="flex-1" placeholder="Type a message..." />
							<Button>Send</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
