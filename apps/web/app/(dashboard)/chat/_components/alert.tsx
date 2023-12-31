"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@web/components/ui/alert-dialog"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@web/components/ui/form"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@web/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Icon, MultiSelect, MultiSelectItem } from "@tremor/react";
import { Button } from "@web/components/ui/button";
import { Loader2, PlusSquare, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { Input } from "@web/components/ui/input";

const formSchema = z.object({
	type: z.enum(["public", "protected", "private"]),
	password: z.string().optional(),
	users: z.array(z.string().regex(/^[0-9]+$/)).min(1, { message: "Please select at least one friend." })
}).superRefine((schema, ctx) => {
	const { type, password, users } = schema;
	if (type === "protected" && password?.length == 0) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			message: `Password must be set for Protected chat.`,
			path: ["password"],
		})
	}
})

export default function NewChatButton() {
	const router = useRouter()

	const friends = [
		{ id: "1", name: "John" },
		{ id: "2", name: "Patrick" },
		{ id: "3", name: "Jack" },
	]

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			type: "public",
			password: "",
			users: []
		},
	})

	const [loading, setLoading] = useState(false)
	function onSubmit(values: z.infer<typeof formSchema>) {
		setLoading(true)
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)

		// sleep for 4 seconds
		setTimeout(() => {
			setLoading(false)
			router.push(`/chat/${12}`)
			setOpen(false)
		}, 4000)
	}

	const [open, setOpen] = useState(false)
	return (
		<AlertDialog open={open}>
			<AlertDialogTrigger asChild>
				<Button size="sm" variant="ghost" className="hover:bg-gray-700" onClick={() => setOpen(true)}>
					<PlusSquare className="h-6 w-6" />
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-gray-950">
				<AlertDialogHeader>
					<AlertDialogTitle>New Chat</AlertDialogTitle>
					<AlertDialogDescription>
						You can create a new chat by selecting options below.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="type"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Type</FormLabel>
									<FormControl>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<SelectTrigger>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="public">Public</SelectItem>
												<SelectItem value="private">Private</SelectItem>
												<SelectItem value="protected">Protected</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input type="text" placeholder="password" {...field} disabled={form.getValues().type != "protected"} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="users"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Friends</FormLabel>
									<FormControl>
										<MultiSelect onValueChange={field.onChange}>
											{friends && friends.map((friend) =>
												<MultiSelectItem value={friend.id} key={`${friend.id}${friend.name}`}>{friend.name}</MultiSelectItem>
											)}
										</MultiSelect>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<AlertDialogFooter>
							<AlertDialogCancel onClick={() => setOpen(false)}>Cancel</AlertDialogCancel>
							<Button type="submit" disabled={loading}>
								{loading ? <Loader2 className="animate-spin" /> : "Create"}
							</Button>
						</AlertDialogFooter>
					</form>
				</Form>
			</AlertDialogContent>
		</AlertDialog>
	)
}